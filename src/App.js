import React, { useRef } from "react";
import confetti from "canvas-confetti";
import "./global.css";

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

const AniversarioBrena = () => {
  const refs = {
    title: useRef(),
    unica: useRef(),
    risadas: useRef(),
    docura: useRef(),
    momentos: useRef(),
    engracados: useRef(),
    fofos: useRef(),
    marcantes: useRef(),
    vasco: useRef(),
    final: useRef(),
  };

  const visible = {
    title: useOnScreen(refs.title, "-100px"),
    unica: useOnScreen(refs.unica, "-100px"),
    risadas: useOnScreen(refs.risadas, "-100px"),
    docura: useOnScreen(refs.docura, "-100px"),
    momentos: useOnScreen(refs.momentos, "-100px"),
    engracados: useOnScreen(refs.engracados, "-100px"),
    fofos: useOnScreen(refs.fofos, "-100px"),
    marcantes: useOnScreen(refs.marcantes, "-100px"),
    vasco: useOnScreen(refs.vasco, "-100px"),
    final: useOnScreen(refs.final, "-100px"),
  };

  const dispararConfetes = () => {
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: Math.random(), y: Math.random() - 0.2 } 
      }));
    }, 250);
  };

  return (
    <div className="page">
      <section
        ref={refs.title}
        className={`section section-dark ${visible.title ? "visible" : ""}`}
      >
        <h1 className="title">
          <span style={{color: 'red'}}>✠</span> Parabéns, Brena! <span style={{color: 'red'}}>✠</span>
        </h1>
        <p className="text">
          Hoje é o dia dela, <strong>A MINHA Vascaína! </strong>  
          Um momento para celebrar toda a <em>luz</em> que você traz ao mundo só por ser quem é.  
          Que cada instante deste dia seja repleto de <strong>sorrisos</strong>, 
          <em> carinho</em> e <strong>boas surpresas</strong>, porque você merece isso e muito mais.
        </p>
      </section>

      <section
        ref={refs.unica}
        className={`section section-alt ${visible.unica ? "visible" : ""}`}
      >
        <h2 className="subtitle">✨ Uma mulher única</h2>
        <p className="text">
            Não é apenas pela <strong>força</strong> que carrega ou pela 
            <strong> paixão</strong> que demonstra, mas pela forma única como você 
            <em> ilumina</em> a vida de quem tem a sorte de estar ao seu lado.  
            Sua presença transforma qualquer momento, trazendo leveza, alegria e aquela 
            <em> sinceridade</em> rara de encontrar.  

            Sinceramente? Eu imaginava que você fosse diferente (de um jeito ruim), mas acabou se tornando uma das 
            <strong> pessoas mais especiais</strong> que já conheci.  
            Nunca mude quem você é; e, se mudar, que seja apenas para melhor — se é que isso é possível kkkkkk.  

            Olha, além de <strong>mulher</strong>, você é 
            <strong> única</strong>, <em> especial</em>, <strong> magnífica</strong>… uma obra-prima que Deus caprichou.  
            Minha <em> linda</em>, saiba que o seu dia é mais que especial justamente por ser o seu dia.  

            Evolua, prossiga e persista sempre nos seus sonhos. Senhor Gutemberg e Dona Cidinha lhe criaram com amor e sabedoria, 
            e o resultado é essa pessoa incrível que tenho o privilégio de conhecer.  

            Parabéns por ser quem você é, e por deixar o mundo mais bonito só com a sua presença.  
            Hoje, o dia é seu e eu comemoro com orgulho e carinho!
        </p>
      </section>

      <section
        ref={refs.risadas}
        className={`section section-dark ${visible.risadas ? "visible" : ""}`}
      >
        <h2 className="subtitle">😂 Risadas que marcam</h2>
        <p className="text">
            Quem mais aguentaria as nossas piadas internas? Desde as zoeiras sobre o <strong>Vegetti</strong> —
            que <em>você ama</em> e <em>eu odeio</em> kkkkkk, o grande zagueiro <strong>João Victor</strong> que é
            injustiçado, até os memes do <strong>Loide Augusto</strong> que, junto com o <strong>Vasco</strong>,
            acabaram unindo a gente.  
            A diversão nunca falta quando você está por perto.  
            Eu me divirto demais com você! Tudo bem que, às vezes, eu fico no <em>vácuo</em>, mas toda vez
            que você vem falar comigo, já sei que vou rir e que vai ser uma conversa leve e suave.  
            Você sempre elogia o seu grupo, mas quando fala do meu é só <em>desgraça</em>… e com razão,
            o que me faz rir ainda mais kkkkkk. Seus dramas são engraçados demais, suas provocações
            são totalmente desnecessárias, mas no fim valem a pena.  
            Saiba que sua risada é <strong>maravilhosa</strong>, seu sorriso é <strong>lindo</strong> e
            contagia qualquer ambiente. Continue sendo essa pessoa leve, com suas <em>palhaçadinhas</em>,
            sua <strong>"bandida"</strong>.  
            Que a alegria que você espalha continue contagiando todos nós por muitos anos.
        </p>
        <p className="text">
          A gente até briga às vezes, mas no fim, é só <strong>risada</strong> e <em>história</em> para contar  
          e o <strong>Vasco</strong> sempre no coração, né?
        </p>
      </section>

      <section
        ref={refs.docura}
        className={`section section-alt ${visible.docura ? "visible" : ""}`}
      >
        <h2 className="subtitle">🌸 Doçura que não se esquece</h2>
        <p className="text">
           No meio das brincadeiras e provocações, tem aquele seu jeito <strong>único</strong> de cuidar.  
          É quando você escuta minhas histórias com <em>paciência</em>, até as mais difíceis,  
          ou quando se preocupa com minha família e me motiva nos estudos.  

          Sua sinceridade, às vezes dura, mas sempre <strong>honesta</strong>,  mostra o quanto você se importa.  
          E nos detalhes? Aí que está sua <em>magia</em>: nas mensagens de "fica com Deus",  
          no apoio quando fala das suas preocupações, ou até na forma como me chama de <strong>"sonso"</strong>.  

          Você é essa mistura rara de <strong>força</strong> e <em>suavidade</em>, que aquece sem precisar dizer muito.  
          É por isso que, mesmo nas zoações, você deixa marca, porque sua <strong>doçura</strong> não é fingida,  
          é autêntica como o seu <em>"VASCO, Vasco, amo, amo!"</em> no meio da madrugada.
        </p>
      </section>

      <section
        ref={refs.momentos}
        className={`section section-dark ${visible.momentos ? "visible" : ""}`}
      >
        <h2 className="subtitle">📱 Nossos momentos</h2>
        <p className="text">
            Entre conversas no <strong>WhatsApp</strong>, mensagens trocadas no meio da noite e aquelas histórias que só a gente entende,  
            a nossa conexão se fortalece a cada instante.  
            Nunca me <strong>arrependi</strong> de ter respondido seu story, de ter pedido seu número,  
            de mandar aquela <em>figurinha do Loide</em> (a clássica que sempre dá risada),  
            ou das madrugadas nas férias que você passou conversando comigo, mesmo me zoando sem piedade kkkkk.  

            Não importa o que aconteça, essas memórias são um lembrete de que você faz toda <strong>diferença</strong> na minha vida  
            e na de quem tem o privilégio de te conhecer e ainda consegue me deixar sorrindo só com uma mensagem sua.
        </p>
      </section>

      <section
        ref={refs.engracados}
        className={`section section-alt ${visible.engracados ? "visible" : ""}`}
      >
        <h2 className="subtitle">🎭 Momentos Engraçados</h2>
        <p className="text">
          "O gigante tem um pai." e, pelo visto, o pai aqui adora provocar <strong>BH27</strong>.  
          Entre ameaças de <em>“porradão”</em>, risadas de <strong>“KKKKKK” </strong>  
          e discussões épicas sobre <strong>Vasco x Flamengo</strong>, a gente já perdeu a conta de quem ganhou mais vezes  
          (provavelmente eu, porque a zoeira nunca acaba e o <strong>Vasco</strong> não ajuda, você sabe kkkkk).  

          Se o Vasco perde, é <em>drama</em>; se o Flamengo perde, é <em>festa</em>.  
          Às vezes eu me passo sem querer querendo, ficando feliz que o Vasco levou gol? Sim, mas aí eu lembro que  
          sua <strong>felicidade</strong> é prioridade e já peço perdão em seguida kkkkkkk.  

          E no fim, os dois ficam prometendo que vão torcer juntos… até a próxima partida.
          </p>
      </section>

      <section
        ref={refs.fofos}
        className={`section section-dark ${visible.fofos ? "visible" : ""}`}
      >
        <h2 className="subtitle">💖 Momentos Fofos</h2>
        <p className="text">
          Por trás das provocações, tem aquele <strong>cuidado disfarçado</strong>.  
          É nas entrelinhas que aparecem frases tipo <em>“Cmg vc fica tranquila”</em> ou <em>“Eu amo” </em>  
          e até uma ou outra promessa que só quem é <strong>humano de verdade</strong> cumpre, como vestir a camisa do rival futuramente  
          (setembro tá chegando hein, vou ver você de <strong>Mengão</strong>) e torcer juntos.  

          Eu sendo o <strong>homem mais fiel do mundo</strong>, e você me chamando de <em>bandido</em>,  
          mas no fundo você sabe que eu presto, e você que é a <strong>bandida</strong>.  
          Mesmo assim, eu <strong>amo você demais</strong>, é impressionante, tipo muito mesmo — espero que você me entenda.  

  Mesmo com as diferenças, a gente sabe que tá ali <em>um pro outro</em>. Sempre.
        </p>
      </section>

      <section
        ref={refs.marcantes}
        className={`section section-alt ${visible.marcantes ? "visible" : ""}`}
      >
        <h2 className="subtitle">📜 Momentos Marcantes</h2>
        <p className="text">
          Quem diria que além do mesmo mês de aniversário, a gente ainda mora praticamente no mesmo bairro?  
          Entre histórias de família, lembranças da faculdade e até comentários aleatórios sobre <em>Chiquititas</em> e <em>TikTok</em>,  
          a relação foi ficando <strong>mais forte</strong>.  

          A primeira vez que te vi (não lembro exatamente kkkkk), mas os momentos que te trombei pelos corredores,  
          quando começamos a se falar, e quando te revi pessoalmente pela primeira vez,  
          eu estava <strong>nervosooo</strong> e angustiado, mas nunca me esquecerei de você, sempre fiquei de olho.  

          A gente já se viu em tanta situação aleatória que parece até <em>roteiro de série</em> —  
          só falta a trilha sonora com o <strong>hino do Vasco</strong> no fundo (claro, você é a protagonista).
          </p>
      </section>

      <section
        ref={refs.vasco}
        className={`section section-dark ${visible.vasco ? "visible" : ""}`}
      >
        <h2 className="subtitle">❤️ Time Vasco no coração</h2>
        <div className="images-grid ">
          <div className="image-container">
            <img
              src="./images/Loide.jpg"
              alt="Loide Augusto"
              className="image"
            />
            <p className="image-caption">Loide, o vascaíno raiz que amamos (Melhor figurinha)</p>
          </div>
          <div className="image-container">
            <img
              src="./images/vegetti2.webp"
              alt="Vegetti"
              className="image"
            />
            <p className="image-caption">Vegetti, que você ama e eu odeio kkkkk (Bagre)</p>
          </div>
          <div className="image-container">
            <img
              src="./images/gardem.jpg"
              alt="Garden"
              className="image"
            />
            <p className="image-caption">Leo Garden, o herói do vascaum (Gênio)</p>
          </div>
          <div className="image-container">
            <img
              src="./images/jv.jpeg"
              alt="jv"
              className="image"
            />
            <p className="image-caption">João victor, melhor zagueiro do país (Injustiçado)</p>
          </div>
        </div>
      </section>

      <section
        ref={refs.final}
        className={`section section-alt final-section ${
          visible.final ? "visible" : ""
        }`}
      >
        <h2 className="subtitle">🎊 Pra fechar com chave de ouro</h2>
        <p className="text">
          Que esse novo ciclo seja repleto de <strong>grandes momentos</strong>, <em>sorrisos sinceros </em>  
          e aquela <strong>paixão pelo Vasco</strong> que só você sabe ter.  

          Parabéns, Brena! Que <strong>Deus continue abençoando sua vida</strong>.  
          Desejo tudo de <em>bom e do melhor</em>, aproveite ao máximo seu dia, seja feliz,  
          e curta cada momento com suas <strong>amigas e família</strong>.  

          Realize todos os seus desejos e sonhos, sempre com <em>Deus no coração</em>.  
          Que a <strong>felicidade</strong> te acompanhe sempre.  
          <strong> EU TE AMO</strong>! 💖
        </p>
        <button className="btn-confetti" onClick={dispararConfetes}>
          🎉 Soltar confetes!
        </button>
      </section>
    </div>
  );
};

export default AniversarioBrena;
