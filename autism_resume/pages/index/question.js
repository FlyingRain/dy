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
          checked: false,
        },
        {
          descriptions: "2",
          value: "2",
          checked: false,
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
          checked: false,
        },
        {
          descriptions: "3",
          value: "3",
          checked: false,
        },
        {
          descriptions: "2",
          value: "2",
          checked: false,
        },
        {
          descriptions: "1",
          value: "1",
          checked: false,
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
          checked: false,
        },
        {
          descriptions: "2",
          value: "2",
          checked: false,
        },
        {
          descriptions: "3",
          value: "3",
          checked: false,
        },
        {
          descriptions: "4",
          value: "4",
          checked: false,
        },
      ],
      answer: '4'
    }

    ],
    currentPageCount: 1,
    canSubmit:true,
  },
  onLoad: function () {
    const items = this.data.examinations[0].selections,
      content = this.data.examinations[0].question

    this.setData({ currentPageCount: 1, items, content })
  },
  checkboxChange(e) {
    const values = e.detail.value;
    const currentPageCount = this.data.currentPageCount,
      examinations = this.data.examinations,
      items = this.data.items
    for (let i = 0, lenT = examinations.length; i < lenT; ++i) {
      if (i + 1 == currentPageCount) {
        const page = currentPageCount + 1
        for (let j = 0; j < items.length; ++j) {
          if (items[j].value == values) {
            examinations[i].selections[j].checked = true
            items[j].checked = true
          } else {
            examinations[i].selections[j].checked = false
            items[j].checked = false
          }
        }
        this.setData({ items,examinations }, () => { this.showQuestion(examinations[i + 1], page); })
      }
    }
  },

  showQuestion(q, page) {
    if (page < 4) {
      this.setData({ currentPageCount: page, content: q.question, items: q.selections })

    } else {
      this.setData({canSubmit:false})
      console.log("超出限制")
    }
    console.log("currentPage:"+page)

  },

  preQuestion() {
    const currentPageCount = this.data.currentPageCount,
      examinations = this.data.examinations
    for (let i = 0; i < examinations.length; ++i) {
      if (currentPageCount == i + 1 && i != 0) {
        this.showQuestion(examinations[i-1],i)
      }else{
      }
    }
  },

  nextQuestion(){
    const currentPageCount = this.data.currentPageCount,
      examinations = this.data.examinations
    for (let i = 0; i < examinations.length; ++i) {
      if (currentPageCount == i + 1 && i != 3) {
        this.showQuestion(examinations[i+1],currentPageCount+1)
      }else{
      }
    }
  },



})
