const app = getApp()

Page({
  data: {
    url: "https://s3.pstatp.com/toutiao/static/img/logo.201f80d.png",
    items: [],
    content: "",
    examinations: [{
      question: "1.请问1+1等于几",
      selections: [
        {
          descriptions: "1",
          value: "1",
          checked:false,
        },
        {
          descriptions: "2",
          value: "2",
          checked:false,
        },

      ],
      answer: '2'
    },
    {
      question: "2.请问2+2等于几",
      selections: [
        {
          descriptions: "4",
          value: "4",
          checked:false,
        },
        {
          descriptions: "3",
          value: "3",
          checked:false,
        },
        {
          descriptions: "2",
          value: "2",
          checked:false,
        },
        {
          descriptions: "1",
          value: "1",
          checked:false,
        },

      ],
      answer: '4'
    },
    {
      question: "3.请问3+1等于几",
      selections: [
        {
          descriptions: "1",
          value: "1",
          checked:false,
        },
        {
          descriptions: "2",
          value: "2",
          checked:false,
        },
        {
          descriptions: "3",
          value: "3",
          checked:false,
        },
        {
          descriptions: "4",
          value: "4",
          checked:false,
        },
      ],
      answer: '4'
    }

    ],
    currentPage: 1,
  },
  onLoad: function () {
    const items = this.data.examinations[0].selections,
      content = this.data.examinations[0].question

    this.setData({ currentPage: 1, items, content })
    console.log('Welcome to Mini Code')
  },
  checkboxChange(e) {
    const values = e.detail.value;
    console.log("select value is :" + values)
    const currentPage = this.data.currentPage,
    examinations = this.data.examinations
    for(let i = 0,lenT = examinations.length;i<lenT;++i){
      if(i+1==currentPage){
        const page = currentPage+1
        this.nextQuestion(examinations[i+1],page)
      }
    }
  },

  nextQuestion(q,page){
    if(page<4){
      for(let j = 0,lenS= q.selections.length;j<lenS;++j){
        console.log("box " + q.selections[j].descriptions+",checked:" + q.selections[j].checked)
      }
      this.setData({currentPage:page,content:q.question,items:q.selections})
    }else{
      console.log("超出限制")
    }
  }
  
})
