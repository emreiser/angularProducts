require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module AngularProducts
  class Application < Rails::Application
    config.generators do |generate|
      generate.helper false
      generate.assets false
      generate.controller_specs false
      generate.view_specs false
    end
  end
end
