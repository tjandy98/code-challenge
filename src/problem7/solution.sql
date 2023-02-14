SELECT t.address
FROM trades as t
JOIN (
  SELECT address, SUM(CASE denom WHEN 'usdc' THEN amount * 0.000001 WHEN 'swth' THEN amount * 0.00000005 WHEN 'tmz' THEN amount * 0.003 ELSE 0 END) as usd_balance
  FROM balances as b
  GROUP BY address
) b ON t.address = b.address
WHERE t.block_height > 730000 AND b.usd_balance >= 500
GROUP BY t.address