import React, { useState, useEffect, useRef, useContext } from 'react';
import Navbar from './comps/Navbar';
import Paper from './elems/Paper';

import Bag from './Bag'; //storage component

export default function App() {
  return (
    <div className="app">
      <Navbar position="top">
        <img src="https://picsum.photos/200/40" alt="" />
        <span className="material-icons-round">lunch_dining</span>
        {/* <span className="material-icons-round">account_circle</span> */}
      </Navbar>
      <Navbar position="bottom" tab="true">
        <span className="material-icons-round">sports_esports</span>
        <span className="material-icons-round">favorite</span>
        <span className="material-icons-round">leaderboard</span>
        <span className="material-icons-round">account_circle</span>
      </Navbar>
      <Paper>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam
        itaque amet maxime nostrum magnam, sed temporibus delectus ad quae
        libero, vitae consequatur, commodi distinctio? Sed provident facilis
        vitae iusto, quidem, blanditiis ipsum quam delectus deleniti tempore
        mollitia nemo? Excepturi odit voluptate ipsum ab in molestiae quidem
        ullam earum, dolores expedita necessitatibus dignissimos commodi vero
        perspiciatis similique sequi aspernatur temporibus laudantium nobis
        aperiam voluptatum magnam nihil saepe. Rerum facilis harum iure, fugit
        pariatur ullam cumque commodi facere eveniet quae! Mollitia eveniet
        eligendi ratione assumenda doloribus, corrupti iusto. Ipsum soluta
        excepturi quod, praesentium consequuntur, aut doloremque velit hic sunt
        sequi nam dolores vel dicta cupiditate dignissimos, ad numquam molestiae
        fugiat totam delectus quis! Eaque reprehenderit debitis cupiditate rem.
        Doloremque nobis perspiciatis sequi odio animi, ad nesciunt quas
        quibusdam voluptatibus, libero esse enim eveniet accusamus alias ducimus
        quasi dignissimos optio fugit dolorem! Perferendis quibusdam eos,
        temporibus eum error quis quisquam quod! Quisquam voluptatibus dicta
        quidem eum a eos, accusantium nostrum ducimus quia eaque, iste nulla quo
        pariatur. Rem beatae quas modi velit delectus amet, explicabo
        voluptatem, recusandae vero exercitationem unde assumenda minima. Esse
        iure maiores pariatur praesentium impedit. Dolorem perspiciatis sit
        officia distinctio debitis architecto aut? Sit, obcaecati fugit. Eaque,
        pariatur dolore. Et nobis cumque nisi odio ut optio cupiditate
        consectetur necessitatibus debitis quos enim quod eaque dignissimos
        voluptates, fuga velit? Sapiente doloribus voluptate magni, repellendus
        illo dolor aliquid quis rerum iusto repellat, nesciunt numquam possimus
        blanditiis ex sunt rem error illum modi velit? Inventore voluptatem sit
        asperiores facilis quidem qui eum, molestias velit quibusdam, eaque
        aliquam pariatur? Magnam explicabo repudiandae, tenetur ratione
        voluptate voluptas! Voluptates facilis sed soluta sapiente aperiam!
        Exercitationem id obcaecati distinctio tempora aut temporibus quae nisi
        itaque ea! Consectetur sapiente repellat sint amet? Quod eligendi,
        temporibus minima provident blanditiis dolorem excepturi distinctio quo!
        Velit excepturi adipisci magnam odio ex sunt ad unde perferendis ipsam,
        soluta quo voluptate iusto temporibus, id voluptatibus! Voluptatem
        pariatur repudiandae facilis in, saepe tempore nostrum quibusdam at
        veritatis fugit eius mollitia illo quo molestias facere dolores omnis
        explicabo vitae suscipit blanditiis neque tempora dolore exercitationem?
        Ea libero, natus minus, vero animi aspernatur, assumenda cupiditate
        ratione tempora perferendis aut! Vitae, provident. Voluptas eveniet
        praesentium, magnam suscipit adipisci odit reiciendis a distinctio porro
        ipsum magni numquam veniam corporis minima commodi itaque, laudantium
        fuga architecto tempore, rem nulla hic. Praesentium, quidem architecto
        in provident ab labore dignissimos cumque iste quo id cum voluptatibus
        illum dolorem, harum officiis facere maiores quod quae reprehenderit
        delectus quia reiciendis ratione excepturi? Obcaecati earum velit modi,
        ipsum fuga impedit, harum quod quae sunt ab nam numquam quis, nisi
        aspernatur autem? Cumque magnam optio placeat labore delectus nostrum
        accusamus itaque nobis vero eaque aliquam aperiam voluptatibus iusto
        neque, consequuntur adipisci natus reiciendis tenetur harum, porro sunt
        odio maxime. Ipsum eum fugit laudantium minus perferendis, distinctio
        voluptate obcaecati dolorum maxime quaerat nihil ad, reprehenderit
        assumenda incidunt sint nostrum numquam tenetur. Voluptatibus odio ipsa
        dolor assumenda eos, delectus obcaecati soluta quod et nesciunt quis
        voluptatem suscipit fuga, doloribus eum dicta. Minima optio doloremque
        culpa saepe!
      </Paper>
    </div>
  );
}
