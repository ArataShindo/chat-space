## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,|

### Association
- has_many :users,throigh::groups_users
- has_many :grops_users
- has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false,|
|email|string|null: false,|


### Association
- has_many :users,throigh::groups_users
- has_many :grops_users
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|text||
|use_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|


### Association
- belpngs_to :group
- belongs_to :user