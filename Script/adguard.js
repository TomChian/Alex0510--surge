var obj = JSON.parse($response.body);

obj = {
  "products": [
    {
      "premium_status": "ACTIVE",
      "product_id": "com.adguard.year ",
      "expiration_date": 1886001990000
    }
  ]
}

$done({body: JSON.stringify(obj)});
