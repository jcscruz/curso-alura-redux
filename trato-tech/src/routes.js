import PaginaPadrao from './components/PaginaPadrao/';
import Categoria from './pages/Categoria';
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />}>
          <Route index element={<Home/>} />
          <Route path='/categoria/:nomeCategoria' element={<Categoria/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}