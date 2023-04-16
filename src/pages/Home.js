const styles = {
  container: {
    minHeight: 'calc(50vh)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 400,
    fontSize: 55,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome phonebook Application{' '}
      </h1>
    </div>
  );
}
