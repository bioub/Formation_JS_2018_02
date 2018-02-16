function bind(fn, that) {
  return function() {
    fn.call(that);
  };
}

var contactES3 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES3 helloSync: Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    var that = this; // on sauvegarde this dans la portée de closure
    setTimeout(function() {
      console.log('ES3 helloAsync: Bonjour je m\'appelle ' + that.prenom);
    }, 100);
  },
  helloAsyncBind: function() {
    setTimeout(bind(this.helloAsync, this), 1000);
  }
};

contactES3.helloSync();
contactES3.helloAsync();
contactES3.helloAsyncBind();

var contactES5 = {
  prenom: 'Romain',
  helloSync: function() {
    console.log('ES5 helloSync: Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('ES5 helloAsync: Bonjour je m\'appelle ' + this.prenom);
    }.bind(this), 100);
  },
  helloAsyncBind: function() {
    setTimeout(this.helloAsync.bind(this), 1000);
  },
};

contactES5.helloSync();
contactES5.helloAsync();
contactES5.helloAsyncBind();


const contactES6 = {
  prenom: 'Romain',
  helloSync() {
    console.log('ES6 helloSync: Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync() {
    // this dans la portée de closure
    setTimeout(() => {
      console.log('ES6 helloAsync: Bonjour je m\'appelle ' + this.prenom);
    }, 100);
  },
  helloAsyncBind() {
    setTimeout(this.helloAsync.bind(this), 1000);
  },
};

contactES6.helloSync();
contactES6.helloAsync();
contactES6.helloAsyncBind();

/*
class ContactESNext {

  prenom = 'Romain';

  helloSync = () => {
    console.log('ESNext helloSync: Bonjour je m\'appelle ' + this.prenom);
  }

  helloAsync() {
    // this dans la portée de closure
    setTimeout(() => {
      console.log('ESNext helloAsync: Bonjour je m\'appelle ' + this.prenom);
    }, 100);
  }

  helloAsyncBind() {
    setTimeout(this.helloAsync, 1000);
  }

}

const contactESNext = new ContactESNext();

contactESNext.helloSync();
contactESNext.helloAsync();
contactESNext.helloAsyncBind();
*/
