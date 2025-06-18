from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import GridSearchCV

def train_knn_tuned(X_train_scaled, y_train):
    print("Trenowanie: Zoptymalizowany kNN (Tuning)...")

    param_grid = {
        'n_neighbors': list(range(1, 21)) 
    }

    # Użycie GridSearchCV do znalezienia najlepszego 'k'
    grid_search = GridSearchCV(
        KNeighborsClassifier(),
        param_grid,
        cv=3, # 3-krotna walidacja krzyżowa dla szybkości
        scoring='roc_auc', # Optymalizujemy pod kątem AUC
        verbose=1,
        n_jobs=-1
    )
    grid_search.fit(X_train_scaled, y_train)

    print(f"Znaleziono najlepsze parametry dla kNN: {grid_search.best_params_}")
    return grid_search.best_estimator_