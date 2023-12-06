import './App.scss';
import Header from './components/Header';
import ModalAddNew from './components/ModalAddNew';
import TableUsers from './components/TableUsers';
import Container from 'react-bootstrap/Container';

function App() {


  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className='my-3 d-flex justify-content-between text-center'>
          <span><h3>List Users:</h3></span>
          <button className="btn btn-success">Add new user</button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddNew />
    </div>
  );
}

export default App;
