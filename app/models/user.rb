class User < ActiveRecord::Base
	attr_accessible :first_name, :last_name, :email, :password, :password_confirmation
	has_secure_password

	before_save { |user| user.email = user.email.downcase }
	before_save :create_remember_token

	validates :first_name,  presence: true, length: { maximum: 50 }
	validates :last_name,  presence: true, length: { maximum: 50 }
	validates :phone_number, presence: true, length: { maximum: 20 }
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
						uniqueness: { case_sensitive: false }
	validates :password, length: { minimum: 6 }
	validates :password_confirmation, presence: true
end