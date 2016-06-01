Router.route '/', ->
  @render 'main'

Router.route '/config', ->
  @render 'admin'

