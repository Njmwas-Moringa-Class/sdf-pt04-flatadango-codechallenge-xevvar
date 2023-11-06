// Your code here
document.addEventListener('DOMContentLoaded', function () {
    const baseURL = 'http://localhost:3000';
    const filmsList = document.getElementById('films');
    const poster = document.getElementById('poster');
    const title = document.getElementById('title');
    const runtime = document.getElementById('runtime');
    const filmInfo = document.getElementById('film-info');
    const showtime = document.getElementById('showtime');
    const ticketNumber = document.getElementById('ticket-num');
    const buyTicket = document.getElementById('buy-ticket');



    fetch(`${baseURL}/films/1`)
        .then((response) => response.json())
        .then((film) => {

            poster.src = film.poster;
            title.textContent = film.title;
            runtime.textContent = film.runtime;
            showtime.textContent = film.showtime;
            filmInfo.textContent = film.description;
            ticketNumber.textContent = film.capacity - film.tickets_sold;

        })

    fetch(`${baseURL}/films`)
        .then((response) => response.json())
        .then((films) => {
            filmsList.innerHTML = "";
            films.forEach((film) => {
                const li = document.createElement('li');
                li.textContent = film.title;

                li.addEventListener('click', function () {
                    title.textContent = film.title;
                    poster.src = film.poster;
                    runtime.textContent = film.runtime;
                    showtime.textContent = film.showtime;
                    filmInfo.textContent = film.description;
                    ticketNumber.textContent = film.capacity - film.tickets_sold;

                });

                filmsList.appendChild(li);
            });

        })

    buyTicket.addEventListener('click', function () {
        let remainingTickets = parseInt(ticketNumber.textContent);

        if (remainingTickets > 0) {

            remainingTickets--;

            ticketNumber.textContent = remainingTickets;
        } else {

            alert('There are no more tickets available for this movie.')

        }

    });


});
