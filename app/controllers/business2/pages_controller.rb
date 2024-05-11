class Business2::PagesController <ApplicationController

    def invoice
        @order = Order.includes(:order_items,:products).find(params[:id])
    end

end