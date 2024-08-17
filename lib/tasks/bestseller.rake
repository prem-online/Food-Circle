namespace :bestseller do
  desc 'Create Bestsellers for all users'
  task create: :environment do
    # Iterate over all accounts
    month = Time.current.month
    year = Time.current.year
    day = Time.current.day
    # Iterate over all accounts
    Sequel::Account.each do |account|
      # Fetch top 3 products by sold_quantity for the current account
      top_products = account.products_dataset
                            .order(Sequel.desc(:sold_quantity))
                            .limit(Constants::BESTSELLER_GRAPH_ITEMS)

      # Create a Bestseller record for each top product
      top_products.each do |product|
        bs = Sequel::Bestseller.new(
          name: product.name,
          account_id: account.id,
          sold_quantity: product.sold_quantity,
          day_month_year: "#{day}_#{month}_#{year}"
        )
        if bs.save
          Rails.logger.info 'Bestsellers created successfully for all users.'
        else
          Rails.logger.error 'An error occurred while creating bestsellers for' + account&.email&.to_s + bs.errors.full_messages.to_s
        end
      end
    end
  end
end
