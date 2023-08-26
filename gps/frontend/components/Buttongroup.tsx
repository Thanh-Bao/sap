'use client';

import { Button } from 'flowbite-react';
import { HiCurrencyDollar, HiSparkles, HiThumbUp } from 'react-icons/hi';

export default function WithIcons() {
  return (
    <Button.Group>
      <Button color="gray">
        <HiSparkles className="mr-3 h-4 w-4"/>
        <p>
          Sản phẩm mới
        </p>
      </Button>
      <Button color="gray">
        <HiThumbUp className="mr-3 h-4 w-4" />
        <p>
          Sản phẩm nổi bật
        </p>
      </Button>
      <Button color="gray">
        <HiCurrencyDollar className="mr-3 h-4 w-4"/>
        <p>
          sản phẩm giảm giá
        </p>
      </Button>
    </Button.Group>
  )
}

