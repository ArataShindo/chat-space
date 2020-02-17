json.content @message.content
json.name @message.user.name
json.updated_at @message.updated_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image.url
json.id @message.id