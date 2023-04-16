import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Chapions from './components/Chapions';
import Contact from './components/Contact'

import SkinsCard from './components/SkinsCard'
import { useState } from 'react';

function App() {
  const[skin,setskin]=useState(
    [{name:'garen',Skins:[
      {skinsname:'mecha kingdom garen',price:'12€',imglink:'https://1.bp.blogspot.com/-rVxpWw3jgJw/XfLLxlixZPI/AAAAAAABdGk/bv_R6rSBm8Q8FdLYPu1dCb1mJHnh2_1WgCLcBGAsYHQ/s1600/86023.jpg'},
      {skinsname:'demacia vice garen',price:'12€',imglink:'https://1.bp.blogspot.com/-Dfz7-ttlI_I/XRqrO-pNZJI/AAAAAAABVgQ/Iz-NDjvGZpI3Th5_evHtNspb_sLpavOMwCLcBGAs/s1600/garen%2Brecall.png'}
    ],imgsrc:'https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt804eabffbf15dc51/5f4defe95acde4265bb2da77/Champion_garen_HP.png'},

    {name:'ashe',Skins:[
      {skinsname:'project ashe',price:'22€',imglink:'https://1.bp.blogspot.com/-LcLFGgoVDEI/V5QxSwVedBI/AAAAAAAAR9k/kowgX9yO5ek2yag2PFLq1aNYj5-4t6UjwCLcB/s1600/ashe.jpg'},
      {skinsname:'fae dragon ashe',price:'20€',imglink:'https://1.bp.blogspot.com/-KEYlw5decGI/X2FVacRuZYI/AAAAAAABsU4/nxqEWS4z678nJgO2ZR00jM40PdBzNhKgwCLcBGAsYHQ/s1600/asheturn.png'}
    ],imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a155f0b1-4492-4c2c-9f70-101cec027cb9/df4vccv-4afa4589-c128-4784-a348-5b4603baa8ad.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ExNTVmMGIxLTQ0OTItNGMyYy05ZjcwLTEwMWNlYzAyN2NiOVwvZGY0dmNjdi00YWZhNDU4OS1jMTI4LTQ3ODQtYTM0OC01YjQ2MDNiYWE4YWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nCm4Tc7zFNHpxUgaPOXDX1bvGJecHFE4Juw-1MZJQ5c'},
    
    
    {name:'ahri',Skins:[
      {skinsname:'arcana ahri',price:'25€',imglink:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPIfZbZ7BR0Hf-iq7AV030ow30nZAQt6_0iQgm2_XyK4BDnLbZQSTKHEaqWTlQ0YsxmngC1_zJOEj5JluKcDaVnEwuIkuhQcl9l490dL66l3yIr6nymVtpoaqUYnJwgnNF2hKAHzb_jFNeVwoDVLGtFFa3skUJWkh_ffFK9gdtuvsDuSXsEla9h59w/s1009/ahriturn.png'},
      {skinsname:'midnight ahri',price:'23€',imglink:'https://www.highgroundgaming.com/wp-content/uploads/2021/09/Midnight-Action-1024x561.jpg'}
    ],imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e632e5f3-ea51-4a14-a0fe-3478869513d3/df1uuy0-c17de065-4200-45eb-af48-316947adcfa0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2MzJlNWYzLWVhNTEtNGExNC1hMGZlLTM0Nzg4Njk1MTNkM1wvZGYxdXV5MC1jMTdkZTA2NS00MjAwLTQ1ZWItYWY0OC0zMTY5NDdhZGNmYTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A0qOoKbrLF8q1RTp-C7H9CyQ2otx7igzGqDbyIORtmw'},
    
    
    {name:'jayce',Skins:[
      {skinsname:'resistance jayce',price:'33€',imglink:'https://www.breakflip.com/uploads2/Tipsalewo/10.23/jayce%203.png'},
      {skinsname:'battle academia jayce',price:'33€',imglink:'https://4.bp.blogspot.com/-5Aojm_K9_yA/XMnjb4_DcjI/AAAAAAABSXM/vNKekZwSkVosOZ1mS9hf373nuzbIHhQgwCLcBGAs/s640/jayce.png'}
    ],imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e632e5f3-ea51-4a14-a0fe-3478869513d3/dflgf7m-5acff742-41e1-48a1-8516-848fdae47fec.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2MzJlNWYzLWVhNTEtNGExNC1hMGZlLTM0Nzg4Njk1MTNkM1wvZGZsZ2Y3bS01YWNmZjc0Mi00MWUxLTQ4YTEtODUxNi04NDhmZGFlNDdmZWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.6TtDNI0vbfXPCvVTbmwjwCg8bHmJoR685teY8fJ5YN0'},
    
    
    {name:'katarina',Skins:[
      {skinsname:'death sworn katarina',price:'45€',imglink:'https://2.bp.blogspot.com/-v0xcPiB0SdI/Wd2DHPQ-VuI/AAAAAAAAxEI/HDR1Ng46fEw_EqVxXog_F1oAuQpM5txLQCLcBGAs/s640/katw.jpg'},
      {skinsname:'high noon katarina',price:'50€',imglink:'https://external-preview.redd.it/0NKswoe4P8nHrAVeViKmtgoF-ZtcYswvbpmID-zA5nI.jpg?auto=webp&s=2485c84ac589430761557f90eed68acca25667c5'},
      {skinsname:'death sworn katarina',price:'45€',imglink:'https://staticg.sportskeeda.com/editor/2020/02/475cc-15812500445368-800.jpg'}
    ],imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e632e5f3-ea51-4a14-a0fe-3478869513d3/df3ip8u-34933009-caab-4ccd-9415-b75a71fb6291.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2U2MzJlNWYzLWVhNTEtNGExNC1hMGZlLTM0Nzg4Njk1MTNkM1wvZGYzaXA4dS0zNDkzMzAwOS1jYWFiLTRjY2QtOTQxNS1iNzVhNzFmYjYyOTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JvqS6_OuMIC6LprYdk9D_vf2WJnrsz-q9JIRDxPXV_k'},
    
    
    {name:'kaisa',Skins:[
      {skinsname:'k/da all out kaisa',price:'12€',imglink:'https://runetarium.com/wp-content/uploads/2022/05/kaisakdaallout_11zon.jpg'},
      {skinsname:'arcade kaisa',price:'21€',imglink:'https://www.pcgamesn.com/wp-content/uploads/2019/06/arcade-kaisa-740x416.jpg'},
      {skinsname:'bullet angel kaisa',price:'22€',imglink:'https://lolskinshop.com/wp-content/uploads/2019/11/bullet-angel-kaisa-chroma2.png'}
    ],imgsrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/f8b14c98-532f-4dec-b9cb-1ca190e9a337/df7u5p4-e0570503-6374-4600-961d-139e2474f371.png'}]
  )    
  return (
    <div className=".nav">
      <>
      <div className='name'>
      <NavLink to={"Home"}>Home</NavLink>
      <NavLink to={"Chapions"}>Chapions</NavLink>
      <NavLink to={"Contact"}>Contact</NavLink>
 
   
     

      </div>


<Routes >
  <Route path='Home' element={<Home></Home>}></Route>
  <Route path='Chapions/' element={<Chapions skin={skin}></Chapions>}>
  
  </Route>
  <Route path='Contact' element={<Contact></Contact>}></Route>
  <Route path='/Chapions/:id' element={<SkinsCard Skins={skin}></SkinsCard>}></Route>
  
 
</Routes>
      
      </>
    </div>
  );
}

export default App;
