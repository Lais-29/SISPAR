import styles from"./Reembolso.module.scss"
import Home from "../../assets/Dashboard/Home.png"
import Seta from "../../assets/Dashboard/Vector.png"
import Analises from "../../assets/Dashboard/Análises.png"
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png"
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png"
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png"
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png"
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png"
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png"
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png"

function Reembolso(){
  return(
    <div>
        <header> 
         <img src={Home} alt="Casinha da header"/> 
         <img src={Seta} alt="Setinha da header"/>
         <p>Reembolso</p>
        </header> 

         <main>
        <h1> Sistema de Reembolsos</h1>   
        <p>
        Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.
        </p> 

        <section className={styles.conteinerCards}>

         <article className={styles.card}>
           <img src={SolicitarReembolso} alt=""/> 
           <p>Solicitar Reembolso </p>
          </article>  

          <article className={styles.card}>
           <img src={Analises} alt=""/>  
           <p>Verificar análises</p>        
          </article> 

          <article className={styles.card}>
            <img src={SolicitarHistorico} alt="" />
            <p>Histórico</p>
            </article>

        </section>


         <section className={styles.conteinerDados}>

            <div>
            <img className={styles.imgSolicitados} src={NumeroSolicitados} alt=""/>
              <h4>182</h4>
              <p>Solicitados</p>
            </div>

            <div>
            <img className={styles.imgAnalise} src={NumeroAnalises} alt=""/>
              <h4>74</h4>
              <p>Em análise</p>
            </div> 

            <div>
            <img className={styles.imgAprovados} src={NumeroAprovados} alt=""/>
              <h4>195</h4>
              <p>Aprovados</p>
            </div>

            <div>
            <img className={styles.imgRejeitados} src={NumeroRejeitados} alt=""/>
              <h4>41</h4>
              <p>Rejeitados</p>
            </div>    

          </section> 

          <section className={styles.conteinerSistema}>
           <img src={Sistema} alt=""/>
           <a href="">Sistema atualizado</a>
          </section>       


         </main>
    </div>
 );
}
export default Reembolso