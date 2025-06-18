from sklearn.tree import DecisionTreeClassifier

def train_decision_tree(X_train, y_train):
    print("Trenowanie: Drzewo Decyzyjne")
    tree = DecisionTreeClassifier(random_state=42)
    tree.fit(X_train, y_train)
    return tree