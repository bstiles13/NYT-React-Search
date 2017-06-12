import axios from "axios";

const API = {

  getArticles: function() {
    return axios.get("/api/articles");
  },

  saveArticle: function(search) {

    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    var searchTerm = search.termValue;
    var startDate = search.startValue;
    var endDate = search.endValue;

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=" + searchTerm;

    if (parseInt(startDate)) {
      url = url + "&begin_date=" + startDate;
    }

    if (parseInt(endDate)) {
      url = url + "&end_date=" + endDate;
    }

    // console.log(url);

    return axios.get(url).then((response) => {

      console.log(response);

      return axios.post("/api/articles", { response });
    });
    
  },

  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },

  favoriteArticle: function(article) {
    article.favorited = !article.favorited;
    const { _id, favorited } = article;
    return axios.patch(`/api/articles/${_id}`, { favorited });
  }
};

export default API;
