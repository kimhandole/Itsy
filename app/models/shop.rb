class Shop < ApplicationRecord

    validates :title, :owner_id, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_one_attached :image
end
