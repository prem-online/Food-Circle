class OrderGraphService
  def initialize(user)
    @user = user
    @orders = @user.orders
    @current_year = Time.current.year
  end

  def all
    current_orders_total_by_month = extract_current_order_graph
    previous_orders_total_by_month = extract_previous_order_graph

    {
      @current_year.to_s.to_sym => current_orders_total_by_month,
      (@current_year - 1).to_s.to_sym => previous_orders_total_by_month
    }
  end

  private

  def all_months
    (1..12).map { |month| [month, 0] }.to_h
  end

  def extract_current_order_graph
    all_months.merge(
      format_order_graph_for_year(@current_year)
    )
  end

  def extract_previous_order_graph
    all_months.merge(
      format_order_graph_for_year(@current_year - 1)
    )
  end

  def format_order_graph_for_year(year)
    @orders.where('extract(year from created_at) = ?', year)
           .group('extract(month from created_at)')
           .sum(:total)
           .transform_keys { |month| month.to_i }
  end
end
