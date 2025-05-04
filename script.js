import Alpine from 'alpinejs'
import { marked } from "marked"

window.Alpine = Alpine;

Alpine.data('tabComponent', ()=> ({
    tab: 'infos',
    load_file(t) {
        this.tab = t;
        fetch(t + ".md")
            .then(response => response.text())
            .then(markdown => {
                const htmlContent = marked.parse(markdown);
                document.getElementById("content").innerHTML = htmlContent;
            })
            .catch(error => console.error("Error loading markdown file:", error));
    }
}));

Alpine.start();