import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import Post from "paginas/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/menu";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";


function AppRoutes() {
  return (
    <BrowserRouter> 
    <Menu/>

    <Routes>
      <Route path="/" element={<PaginaPadrao/>}>
        <Route index element={<Inicio/>} />
        <Route path="sobremim" element={<SobreMim/>}/>
        <Route path="posts/:id" element={<Post/>}/> 
      </Route>
        
        <Route path="*" element={<div>Página não encontrada</div>}/>
    </Routes>

    <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;




{/*  
      na rota "/", a estrutura a ser renderizada é:

      <PaginaPadrao>
      <Inicio />
      </PaginaPadrao>

      na rota "/sobremim", a estrutura a ser renderizada é:

      <PaginaPadrao>
      <SobreMim />
      </PaginaPadrao>

      */}