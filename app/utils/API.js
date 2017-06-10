import axios from "axios";

const API = {

  getQuotes: function() {
    return axios.get("/api/quotes");
  },

  saveQuote: function(search) {

    var authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

    var searchTerm = search.termValue;
    var startYear = search.startValue;
    var endYear = search.endValue;

    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=" + searchTerm;

    if (parseInt(startYear)) {
      url = url + "&begin_date=" + startYear + "0101";
    }

    if (parseInt(endYear)) {
      url = url + "&end_date=" + endYear + "0101";
    }

    // console.log(url);

    return axios.get(url).then((response) => {

      console.log(response);

      return axios.post("/api/quotes", { response });
    });
    
  },

  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },

  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  }
};

export default API;
