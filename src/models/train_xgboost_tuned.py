from xgboost import XGBClassifier
from sklearn.model_selection import RandomizedSearchCV

def train_xgboost_tuned(X_train_scaled, y_train):
    print("Trenowanie: Zoptymalizowany XGBoost (Tuning)...")

    param_grid = {
        'n_estimators': [100, 200, 300],
        'max_depth': [3, 5, 7, 10],
        'learning_rate': [0.01, 0.05, 0.1],
        'subsample': [0.7, 0.8, 0.9],
        'colsample_bytree': [0.7, 0.8, 0.9]
    }

    # cv=3 to 3-krotna walidacja 
    xgb_tuned = RandomizedSearchCV(
        estimator=XGBClassifier(use_label_encoder=False, eval_metric='logloss', random_state=42),
        param_distributions=param_grid,
        n_iter=25,
        cv=3,
        scoring='f1',
        random_state=42,
        verbose=1,
        n_jobs=-1  # Użyj wszystkich dostępnych rdzeni procesora
    )

    xgb_tuned.fit(X_train_scaled, y_train)

    print(f"Znaleziono najlepsze parametry: {xgb_tuned.best_params_}")

    return xgb_tuned.best_estimator_