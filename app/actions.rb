# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts.json' do
  
  @contacts = Contact.all
  @contacts.to_json
  
end

post '/' do 

  @contact = Contact.new(
    firstname: params[:firstname],
    lastname: params[:lastname],
    email: params[:email]

  )

end


