import pandas as pd
from mlxtend.frequent_patterns import apriori, association_rules

def run_association_analysis(csv_path):
    """
    Przeprowadzam analizę reguł asocjacyjnych, zapisuje wyniki do pliku CSV
    i wypisuje 10 najmocniejszych reguł w konsoli.
    """
    print("\n--- Rozpoczynam Analizę Reguł Asocjacyjnych ---")
    
    # Krok 1: Wczytanie i przygotowanie danych
    df = pd.read_csv(csv_path)
    df = df.drop('id', axis=1)
    df = df[df['gender'] != 'Other']
    df.loc[:, 'bmi'] = df['bmi'].fillna(df['bmi'].mean())

    # Krok 2: Dyskretyzacja zmiennych ciągłych
    df_assoc = df.copy()
    df_assoc['age_cat'] = pd.cut(df_assoc['age'], bins=[0, 30, 60, 102], labels=['Młody', 'Średni', 'Starszy'])
    df_assoc['bmi_cat'] = pd.cut(df_assoc['bmi'], bins=[0, 18.5, 25, 30, 100], labels=['Niedowaga', 'Norma_BMI', 'Nadwaga', 'Otyłość'])
    df_assoc['glucose_cat'] = pd.cut(df_assoc['avg_glucose_level'], bins=[0, 140, 200, 300], labels=['Norma_Glukozy', 'Podwyższona_Glukoza', 'Wysoka_Glukoza'])
    df_assoc = df_assoc.drop(['age', 'bmi', 'avg_glucose_level'], axis=1)

    # Krok 3: Konwersja do formatu transakcyjnego
    df_apriori = pd.get_dummies(df_assoc, prefix_sep='=')
    df_apriori = df_apriori.astype(bool)
    
    # Krok 4: Uruchomienie algorytmu Apriori
    frequent_itemsets = apriori(df_apriori, min_support=0.05, use_colnames=True)

    # Krok 5: Wygenerowanie reguł
    rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1.2)

    # Krok 6: Zapis pełnych wyników
    rules_sorted = rules.sort_values(by='lift', ascending=False)
    output_path_csv = "results/reports/reguly_asocjacyjne.csv"
    rules_sorted.to_csv(output_path_csv, index=False)
    print(f"Zakończono analizę. Pełne wyniki zapisano w: {output_path_csv}")
    

    print("\n--- 10 Najmocniejszych Odkrytych Reguł ---")
    top_rules = rules_sorted.head(10)
    for index, row in top_rules.iterrows():
        # Używamy frozenset do poprawnego formatowania
        antecedent = ', '.join(list(row['antecedents']))
        consequent = ', '.join(list(row['consequents']))
        lift = row['lift']
        confidence = row['confidence']
        
        print(f"\nReguła #{index}:")
        print(f"  JEŚLI: ({antecedent})")
        print(f"  TO: ({consequent})")
        print(f"  -> Siła (Lift): {lift:.2f} | Pewność (Confidence): {confidence:.2f}")


