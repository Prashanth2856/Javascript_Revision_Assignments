var comics_div = document.getElementById('comics');

const comics = async () => {
    var comic = await fetch(`https://gateway.marvel.com:443/v1/public/comics?&ts=1&apikey=3b36b36ffd6d6f019e89a6935992541b&hash=0d62670dd0bbadd1a150c742a84599e0`);
    var data = await comic.json();
    var { results } = data.data
    // console.log(results);
    results.map((e) => {
        var name = document.createElement('p');
        name.setAttribute('class', 'name')

        name.addEventListener('click', function () {
            comics_div.innerHTML = null

            var title = document.createElement('p')
            title.setAttribute('class', 'title')
            title.textContent = `Title: ${e.title}`

            var btn = document.createElement('button')
            btn.setAttribute('class', 'btn')
            btn.innerHTML = "Back"
            btn.addEventListener('click', function () {
                comics_div.innerHTML = null;
                comics()
            })

            var series = document.createElement('p')
            series.setAttribute('class', 'series')
            series.textContent = `Series Name: ${e.series.name}`

            var image = document.createElement('img')
            image.setAttribute('class', 'comicimg')
            image.src = `${e.thumbnail.path}.${e.thumbnail.extension}`

            comics_div.append(title, series, btn, image)
        })

        name.textContent = e.title
        comics_div.append(name)
    })
}

comics()