from sklearn.neural_network import MLPClassifier

def train_mlp(X_train_scaled, y_train):
    print("Trenowanie: Sieć Neuronowa (MLP)")
    mlp = MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=500, random_state=42)
    mlp.fit(X_train_scaled, y_train)
    return mlp