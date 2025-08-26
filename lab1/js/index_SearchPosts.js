
document.getElementById('searchInput').addEventListener('input', searchPosts);  
document.getElementById('searchButton').addEventListener('click', searchPosts); 

function searchPosts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase().trim(); 
    var articles = document.getElementsByTagName("section"); 
    
    if (searchInput === "") {
        for (let i = 0; i < articles.length; i++) {
            articles[i].style.display = "block"; 
        }
        return;
    }

    
    for (let i = 0; i < articles.length; i++) {
        var titleElement = articles[i].getElementsByClassName("tit")[0]; 

        if (titleElement) {
            var title = titleElement.innerText.toLowerCase(); 

            if (title.includes(searchInput)) {
                articles[i].style.display = "block"; 
            } else {
                articles[i].style.display = "none"; 
            }
        }
    }
}


