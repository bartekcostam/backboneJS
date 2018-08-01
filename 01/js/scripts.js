var Person = Backbone.Model.extend({});

var People = Backbone.Collection.extend({
  model: Person
});

var PersonView = Backbone.View.extend({
  tagName: "li",

  template: _.template($("#personTemplate").html()),

  render: function() {
    var html = this.template(this.model.toJSON());

    this.$el.append(html);

    return this;
  }
});

var people = new People([
  {
    id: 1,
    name: "John",
    age: 33,
    hobbies: ["sport", "IT", "fishing"]
  },
  {
    id: 2,
    name: "Thomas",
    age: 40,
    hobbies: ["golf", "cars"]
  },
  {
    id: 3,
    name: "Alice",
    age: 25,
    hobbies: ["swimming"]
  }
]);
