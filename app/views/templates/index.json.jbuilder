json.array!(@templates) do |template|
  json.extract! template, :name, :description, :content
  json.url template_url(template, format: :json)
end
