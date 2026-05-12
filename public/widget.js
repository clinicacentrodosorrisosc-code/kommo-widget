define(['jquery'], function($) {
  var widget_code;

  return {
    settings: {},

    init: function() {
      return true;
    },

    bind_actions: function() {
      return true;
    },

    render: function() {
      var self = this;
      widget_code = self.get_settings().widget_code;

      if (self.area === 'ccard' || self.area === 'clist') {
        var lead_id = self.params && self.params.id ? self.params.id : '';
        var url = 'https://kommo-widget-nine.vercel.app/index.html?lead_id=' + lead_id;

        var html = '<div class="widget-body__inner">' +
          '<iframe ' +
          'src="' + url + '" ' +
          'style="width:100%;height:600px;border:none;border-radius:8px;" ' +
          'frameborder="0" ' +
          'allowtransparency="true">' +
          '</iframe>' +
          '</div>';

        self.render_template({
          caption: { class_name: '' },
          body: html,
          render: ''
        });
      }

      return true;
    },

    render_template: function(params) {
      var self = this;
      var tmpl = self.get_template('body', params.render, params);
      $(tmpl).appendTo($('#' + self.get_settings().widget_code + '_body'));
      return true;
    },

    destroy: function() {
      return true;
    },

    contacts: {
      selected: function() {}
    },

    leads: {
      selected: function() {}
    }
  };
});
