import Capa from "../../assets/Tela Login/imagem tela de login.png"
import Logo from "../../assets/Tela Login/logo-ws.png"
import styles from "./Loggin.module.scss" //importando o componete de estilização do Login

function Loggin (){
return(
   <main>
   
    <section className={styles.conteinerLoggin}>  
    <img src={Capa} alt="foto navio conteiners"/> 
    </section>
    
    <section className={styles.formWapper}>
    <div className={styles.boxLogo}>
    <img src= {Logo} alt="Logo Wilson Sons"/>
    <h1>Boas vindas ao Novo Portal SISPAR</h1>
    <p>Sistema de Emissão de Boletos e Parcelamento</p>
    </div>

    <form action="">
    <input 
    type ="email" 
    name="email" 
    id="email" 
    placeholder="Email"/>

    <input
    type="password"
    name="password"
    id="password"
    placeholder="Senha"
    />

   <a href="#">Esqueci senha</a> {/* link p/ outra pagina*/}

    <div>
    <button className={styles.buttonEntrar}>Entar</button>
    <button className={styles.bittonCriar}>Criar Conta</button>
    </div>
    
   </form>

   </section>
   
   </main>
)
}
export default Loggin
