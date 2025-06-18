from xgboost import XGBClassifier

def train_xgboost(X_train_scaled, y_train):
    print("Trenowanie: XGBoost")
    xgb = XGBClassifier(use_label_encoder=False, eval_metric='logloss', random_state=42)
    xgb.fit(X_train_scaled, y_train)
    return xgb