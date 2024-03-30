FactoryBot.define do
  factory :business do
    name { "MyString" }
    email { "MyString" }
    activated { false }
    last_login { "2024-03-02 21:03:25" }
    blacklisted { false }
  end
end
