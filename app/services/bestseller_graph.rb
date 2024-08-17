class BestsellerGraph
  CURRENT_MONTH = Constants::CURRENT_MONTH
  CURRENT_YEAR = Constants::CURRENT_YEAR
  GRAPH_LIMIT = Constants::BESTSELLER_GRAPH_ITEMS
  def initialize(user)
    @user = user
  end

  def current_month
    Sequel::Bestseller.where(account_id: @user.id, day_month_year: ["#{CURRENT_MONTH}_#{CURRENT_YEAR}"])
  end

  def all_months
    months_with_year = (1..12).map { |month| "#{month}_#{CURRENT_YEAR}" }
    Sequel::Bestseller.where(account_id: @user.id, day_month_year: months_with_year)
  end

  def labels
    bestsellers.pluck(:name)
  end

  def sales(name)
    records = find_by_name(name)
    monthwise_record(records)
  end

  private

  attr_reader :user

  def bestsellers
    @bestsellers ||= Sequel::Bestseller.order(Sequel.desc(:sold_quantity))
                                       .where(account_id: user.id)
                                       .where(Sequel.ilike(:day_month_year, "%#{CURRENT_YEAR}%"))
                                       .first(GRAPH_LIMIT)
  end

  def find_by_name(name)
    @record = Sequel::Bestseller.order(Sequel.desc(:created_at))
                                .where(name:, account_id: user.id)
  end

  def monthwise_record(records)
    price = records.first&.product&.price

    (1..12).map do |month|
      filtered_records = records.where { day_month_year.like("%_#{month}_#{Time.now.year}") }
      sold_quantity_sum = filtered_records.select_map(:sold_quantity).compact.sum.to_f * (price || 0)

      sold_quantity_sum
    end
  end
end
