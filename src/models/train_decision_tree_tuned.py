from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV

def train_decision_tree_tuned(X_train_scaled, y_train):
    print("Trenowanie: Zoptymalizowane Drzewo Decyzyjne (Tuning)...")

    # Ograniczymy złożoność drzewa, aby zapobiec przeuczeniu
    param_grid = {
        'max_depth': [3, 5, 7, 10, 15],
        'min_samples_leaf': [5, 10, 20, 30],
        'criterion': ['gini', 'entropy']  # ocena przedziału
    }

    grid_search = GridSearchCV(
        DecisionTreeClassifier(random_state=42),
        param_grid,
        cv=3,
        scoring='roc_auc',
        verbose=1,
        n_jobs=-1
    )
    grid_search.fit(X_train_scaled, y_train)

    print(f"Znaleziono najlepsze parametry dla Drzewa Decyzyjnego: {grid_search.best_params_}")
    return grid_search.best_estimator_