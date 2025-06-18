from sklearn.svm import SVC

def train_svm(X_train_scaled, y_train):
    print("Trenowanie: Support Vector Machine (SVM)...")

    svm = SVC(kernel='rbf', probability=True, random_state=42)
    
    svm.fit(X_train_scaled, y_train)
    
    return svm