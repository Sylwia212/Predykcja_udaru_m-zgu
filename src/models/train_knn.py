from sklearn.neighbors import KNeighborsClassifier

def train_knn(X_train, y_train):
    print("Trenowanie: k-Najbliższych Sąsiadów (kNN)")
    knn = KNeighborsClassifier()
    knn.fit(X_train, y_train) # Uwaga: kNN i NB nie wymagają skalowania, ale dla spójności możemy go używać
    return knn