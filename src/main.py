import matplotlib
matplotlib.use('Agg')

import os
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, roc_curve, roc_auc_score

from .preprocess import prepare_data
from .models.train_knn import train_knn
from .models.train_decision_tree import train_decision_tree
from .models.train_naive_bayes import train_naive_bayes
from .models.train_mlp import train_mlp
from .models.train_xgboost import train_xgboost
from .models.train_knn_tuned import train_knn_tuned
from .models.train_decision_tree_tuned import train_decision_tree_tuned
from .models.train_xgboost_tuned import train_xgboost_tuned
from .models.train_svm import train_svm
from .analyze_associations import run_association_analysis


def evaluate_and_save_results(name, model, X_test, y_test):
    """
    Generuje raport i macierz pomyłek z dodaną dokładnością,
    a następnie zapisuje je do plików.
    """
    print(f"Trwa ocena modelu: {name}...")
    y_pred = model.predict(X_test)
    acc = accuracy_score(y_test, y_pred)
    report = classification_report(y_test, y_pred, output_dict=False, zero_division=0)

    report_content = f"Raport klasyfikacji dla modelu: {name}\n\n"
    report_content += f"DOKŁADNOŚĆ (ACCURACY): {acc:.4f}\n"
    report_content += "========================================\n\n"
    report_content += report

    report_path = f"results/reports/report_{name.replace(' ', '_')}.txt"
    with open(report_path, "w") as f:
        f.write(report_content)

    cm = confusion_matrix(y_test, y_pred)
    plt.figure()
    sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
    plt.title(f'Macierz Pomyłek - {name}\nDokładność: {acc:.4f}')
    plt.ylabel('Prawdziwa etykieta')
    plt.xlabel('Przewidziana etykieta')
    plot_path = f"results/plots/cm_{name.replace(' ', '_')}.png"
    plt.savefig(plot_path)
    plt.close()

if __name__ == '__main__':
    DATA_PATH = 'data/healthcare-dataset-stroke-data.csv'
    
    print("--- ROZPOCZYNAM WYKONYWANIE PROJEKTU ---")
    os.makedirs('results/plots', exist_ok=True)
    os.makedirs('results/reports', exist_ok=True)

    print("\n--- CZĘŚĆ 1: ANALIZA PREDYKCYJNA ---")
    
    X_train_scaled, X_test_scaled, y_train, y_test, scaler, feature_names = prepare_data(DATA_PATH)

    print("\n--- Rozpoczynam trening modeli ---")

    trained_models = {
        "kNN (bazowy)": train_knn(X_train_scaled, y_train),
        "kNN (zoptymalizowany)": train_knn_tuned(X_train_scaled, y_train),
        "Drzewo Decyzyjne (bazowe)": train_decision_tree(X_train_scaled, y_train),
        "Drzewo Decyzyjne (zoptymalizowane)": train_decision_tree_tuned(X_train_scaled, y_train),
        "Naiwny Bayes": train_naive_bayes(X_train_scaled, y_train),
        "Support Vector Machine (SVM)": train_svm(X_train_scaled, y_train),
        "Siec Neuronowa (MLP)": train_mlp(X_train_scaled, y_train),
        "XGBoost (bazowy)": train_xgboost(X_train_scaled, y_train),
        "XGBoost (zoptymalizowany)": train_xgboost_tuned(X_train_scaled, y_train)
    }
    print("--- Wszystkie modele wytrenowane ---\n")

    print("--- Rozpoczynam ocenę i zapis wyników ---")
    for name, model in trained_models.items():
        evaluate_and_save_results(name, model, X_test_scaled, y_test)
    print("--- Wszystkie wyniki zapisane ---\n")

    print("--- Generowanie finalnego wykresu porównawczego ROC ---")
    plt.figure(figsize=(14, 10))
    for name, model in trained_models.items():
        y_pred_proba = model.predict_proba(X_test_scaled)[:, 1]
        fpr, tpr, _ = roc_curve(y_test, y_pred_proba)
        auc = roc_auc_score(y_test, y_pred_proba)
        plt.plot(fpr, tpr, label=f'{name} (AUC = {auc:.3f})')

    plt.plot([0, 1], [0, 1], 'k--', label='Model losowy (AUC = 0.500)')
    plt.xlabel('Odsetek fałszywie pozytywnych (False Positive Rate)')
    plt.ylabel('Odsetek prawdziwie pozytywnych (True Positive Rate)')
    plt.title('Porównanie krzywych ROC dla finalnych modeli')
    plt.legend()
    plt.grid()
    roc_plot_path = "results/plots/roc_curves_comparison.png"
    plt.savefig(roc_plot_path)
    print(f"Zapisano wykres ROC do pliku: {roc_plot_path}\n")

    print("\n--- CZĘŚĆ 2: ANALIZA REGUŁ ASOCJACYJNYCH ---")
    run_association_analysis(DATA_PATH)
    
    print("\n--- PROJEKT ZOSTAŁ POMYŚLNIE WYKONANY! ---")
    print("Sprawdź wyniki w folderze 'results/'.")

