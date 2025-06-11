import Alpine from 'alpinejs'
import { marked } from "marked"

window.Alpine = Alpine;

Alpine.data('tabComponent', ()=> ({

    tab: 'infos',
    page_data: {},
    load_file(t) {
        this.tab = t;
        fetch(t + ".md")
            .then(response => response.text())
            .then(markdown => {
                this.page_data[t] = marked.parse(markdown);
                document.getElementById("content").innerHTML = this.page_data[t];
            })
            .catch(error => console.error("Error loading markdown file:", error));
    },
    load_data(t){
        this.tab = t;
        if (this.page_data[t] === undefined) {
            this.load_file(t);
        } else {
            document.getElementById("content").innerHTML = this.page_data[t];
        }
    }
}));

Alpine.start();
