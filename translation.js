var arrayLang = {
    'en': {
      'header': 'On The Workers Side',
      'sub-header': 'Join Our dinner!',
      'about-btn': 'About',
      'org-btn': 'Organizers',
      'about': 'About',
      'about-p1': 'On the Workers’ Side will be a dinner where ' + 
      'we will be inviting the campus workers and their families to join ' + 
      'students who support them and want to get to know them.',
      'about-p2': 'The purpose of the event is to show our appreciation ' +
      'to the laboreres on this campus and to connect with them on a more ' +
      'personal level.',
      'when': 'When?',
      'date': 'February 16, 2019',
      'where': 'Where?',
      'location': 'Kresge Town Hall',
      'who': 'Who?',
      'invited': 'UCSC campus workers, students and supporters',
      'what': 'What?',
      'dinner': 'Dinner',
      'team': 'Team',
      'faq': 'FAQ',
      'q1': 'If I am worker, how can sign up?',
      'a1': '- Contact Francia at fcruzsil@ucsc.edu',
      'q2': 'If I am a student, how can I sign up?',
      'a2': '- Contact Arturo at alopez96@ucsc.edu',
      'q3': 'Can I volunteer for the event?',
      'a3': '- Yes, contact Jessica at jvaldeza@ucsc.edu',
      'q4': 'How can I help fund the event?',
      'a4': '- Contact Arturo at alopez96@ucsc.edu',
      'questions':' If you have any further questions, ' +
      'please contact Arturo Lopez at alopez96@ucsc.edu',
      'sponsors': 'Sponsors',
      'sponsor-sub': 'Thank you to everyone who has supported us!',

    },
      'sp': {
        'header': 'Al Lado De Los Trabajadores',
        'sub-header': 'Acompáñenos en nuestra cena!',
        'about-btn': 'Sobre el evento',
        'org-btn': 'Organizadores',
        'about': 'Sobre el evento',
        'about-p1': 'Al Lado De Los Trabajadores será una cena donde vamos a ' + 
        'invitar a los trabajadores de la universidad y a sus  ' + 
        'familias para acompañar a los estudiantes que los apoyan y ' +
        'quieren conocerlos.',
        'about-p2': 'El objeto de el evento es para mostrar nuestra ' + 
        'apreciación para los labradores de esta universidad y conectarnos ' +
        'con ellos a un nivel más personal.',
        'when': 'Cuando?',
        'date': 'Febrero 16, 2019',
        'where': 'Donde?',
        'location': 'Kresge Town Hall',
        'who': 'Quien?',
        'invited': 'Los trabajadores, estudiantes, y apoyadores de los trabajadores de la Universidad de California, Santa Cruz.',
        'what': 'Que es?',
        'dinner': 'Una cena',
        'team': 'Los organizadores',
        'faq': 'Preguntas más frecuentes',
        'q1': 'Si soy un trabajador, como me puedo apuntar para este evento?',
        'a1': '- Contacte a Francia a fcruzsil@ucsc.edu',
        'q2': 'Si soy un estudiante, como me puedo apuntar para este evento?',
        'a2': '- Contacte a Arturo a alopez96@ucsc.edu',
        'q3': 'Puedo ser un voluntario para este evento?',
        'a3': '- Si, contacte a Jessica a  jvaldeza@ucsc.edu',
        'q4': 'Como puedo fundar este evento?',
        'a4': '- Contacte a Arturo a alopez96@ucsc.edu',
        'questions':' Si tiene más preguntas, por favor contacte a ' +
        'Arturo Lopez a alopez96@ucsc.edu',
        'sponsors': 'Patrocinadores',
        'sponsor-sub': 'Gracias a todos los que nos han apoyado!',
      }
  };

  $(function(){
    $('.translate').click(function(){
      var lang = $(this).attr('id');
      $('.lang').each(function(index, element){
        $(this).text(arrayLang[lang][$(this).attr('key')]);
      })
    });
  });