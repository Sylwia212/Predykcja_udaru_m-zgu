from sklearn.naive_bayes import BernoulliNB 

def train_naive_bayes(X_train, y_train):
    print("Trenowanie: Naiwny Klasyfikator Bayesowski (BernoulliNB)")
    
    nb = BernoulliNB() 
    
    nb.fit(X_train, y_train)
    return nb