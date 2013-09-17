
get '/' do
  @grandma = params[:grandma]
  # Look in app/views/index.erb
  erb :index
end
 
post '/grandma' do
  
  if params[:user_input] == params[:user_input].upcase
    then @grandma = "NOT SINCE 1984!"
  else
    @grandma = "SPEAK UP, KID!"
  end
  erb :index
 
end