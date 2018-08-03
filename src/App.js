import React, { Component } from 'react';
import './App.css';



const col1 = [
'Уважаемые коллеги', 
'С другой стороны', 
'Равным образом',
'Не следует, однако, забыват',
'Таким образом',
'Повседневная практика показвает, что',
'Значимость этих проблем настолько очевидна, что',
'Разнообразный и богатый опыт',
'Задачи организации, в особенности же',
'Идейные соображения высшего порядка, а также'
];

const col2 = [
'реализация намеченных планов',
'рамки и место обучения кадров',
'постоянный количественный рост и сфера нашей активности',
'сложившаяся структура организации',
'новая модель организационной деятельности',
'дальнейшее развитие различных форм деятельности',
'постоянное информационное обеспечение нашей деятельности',
'укрепление и развития структуры',
'консультация с широким активом',
'начало повседневной работы по формированию позиций'
];

const col3 = [
'играет важную роль в формировании',
'требуют от нас анализа',
'требуют определения и уточнени',
'способствуют подготовке и реализации',
'обеспечивает широкому кругу специалистов участие в формировании',
'позволяет выполнить важные задание по разработке',
'в значительной мере обуславливает создание',
'позволяет оценить значение',
'представляет собой интересный эксперимент проверки',
'влечёт за собой процесс внедрения и модернизации'
];

const col4 = [
'существующих финансовых и административных условий',
'дальнейших напрвлений развития',
'системы массового участия',
'позиций, занимаемых участниками в отношении поставленных задач',
'новых предложений',
'направлений прогрессивного развития',
'системы обучения кадров, соответствующей насущным потребностям',
'соответствующих условий активизации',
'модели развития',
'форм воздействия'
];

// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class PhraseDisplay extends Component{
  constructor(props){
    super(props);
    this.state={mes:''};
  }
  gen(){
    var t1 = getRandomInt(0, 9);
    var t2 = getRandomInt(0, 9);
    var t3 = getRandomInt(0, 9);
    var t4 = getRandomInt(0, 9);
    var ph = col1[t1] + " " + col2[t2] + " " + col3[t3] + " " + col4[t4];
    this.setState({mes:ph});
  }
  render(){
    return (
      <div className="phrase"> 
     
        <div className="phrasemsg"> {this.state.mes} </div>
        <button onClick={this.gen.bind(this)}>Сгенерировать</button>
  
    </div>);
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <PhraseDisplay />
          
      </div>
    );
  }
}

export default App;
