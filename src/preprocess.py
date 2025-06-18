import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from imblearn.over_sampling import SMOTE

def prepare_data(csv_path):
    print("ETAP 1: Wczytywanie i przygotowywanie danych...")
    df = pd.read_csv(csv_path)
    df = df.drop('id', axis=1)
    df = df[df['gender'] != 'Other']
    df['bmi'].fillna(df['bmi'].mean(), inplace=True)

    # Kodowanie One-Hot
    df_encoded = pd.get_dummies(df, drop_first=True)
    feature_names = df_encoded.drop('stroke', axis=1).columns.tolist()

    X = df_encoded.drop('stroke', axis=1)
    y = df_encoded['stroke']
    

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)
    

    print("Balansowanie klas (SMOTE) tylko na danych treningowych...")
    smote = SMOTE(random_state=42)
    X_train_resampled, y_train_resampled = smote.fit_resample(X_train, y_train)

    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train_resampled)
    X_test_scaled = scaler.transform(X_test)
    
    print("Dane przygotowane i gotowe do trenowania.")
    return X_train_scaled, X_test_scaled, y_train_resampled, y_test, scaler, feature_names