class DataSource {
    static searchClub(keyword) {
        // return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=8ecc03b9ab862a59e1225b36978c3f59&query=${keyword}`)

        .then(response => {//fungsi fetch() akan mengembalikan promise resolve jika request berhasil dilakukan. Maka untuk menangani respon dari request yang dibuat, kita gunakan .then() yang di dalamnya berisi variabel response sebagai response object yang didapat.
          return response.json();
        })
        .then(responseJson => {//Karena method response.json() juga mengembalikan nilai promise, maka untuk mendapatkan nilai yang dibawa oleh resolve kita perlu menambahkan .then lainnya (chaining promise). Di dalam .then yang kedua ini, berikan parameter dengan nama responseJson (penamaan variabel tidaklah baku, namun gunakan penamaan yang menunjukkan arti dari nilai variabelnya).
            if(responseJson.results) { //di dalam block .then yang kedua, kita kembalikan (return) dengan nilai promise resolve dengan membawa nilai jsonResponse.teams jika nilai array tidak null. Namun jika teams bernilai null, maka kembalikan dengan nilai promise reject dengan membawa nilai “${keyword} is not found”.
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
 }
  
 export default DataSource;