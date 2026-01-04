#!/usr/bin/env ruby
require 'webrick'
require 'fileutils'

port = ENV['PORT'] || 8080
directory = File.join(Dir.pwd, '_site')

unless File.directory?(directory)
  puts "Error: _site directory not found. Please run 'bundle exec jekyll build' first."
  exit 1
end

server = WEBrick::HTTPServer.new(
  Port: port.to_i,
  DocumentRoot: directory,
  BindAddress: '0.0.0.0'
)

trap('INT') { server.shutdown }
trap('TERM') { server.shutdown }

puts "Starting server on port #{port}..."
server.start

